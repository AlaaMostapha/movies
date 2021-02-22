import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import * as moviesActions from "../../redux/actions/movies";
import FormControl from "../../components/form/FormControl";
import Btn from "../../components/btn/Btn";
const AddNewMovie = () => {
  //ACTIONS DISPATCH
  const dispatch = useDispatch();
  const {
    moviesReducer: { genres },
  } = useSelector((state) => state);
  //REACT-HOOK-FORM
  const defaultValues = {
    title: "",
    poster: "",
    genres: [""],
    actors: [""],
    budget: 0,
    releaseDate: null,
    description: "",
  };
  const FILE_SIZE = 2000000;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const schema = Yup.object().shape({
    title: Yup.string()
      .test("len", "Maximum number of chars is 50", (val) => val.length <= 50)
      .required("title is required"),
    //true didnt trigger validate
    //false trigger validate
    poster: Yup.mixed()
      .required("poster is required")
      .test("required", "Poster is required", (value) => {
        return value.length;
      })
      .test("fileType", "Unsupported File Format", (value) => {
        if (value.length > 0) {
          return SUPPORTED_FORMATS.includes(value[0].type);
        }
        return true;
      })
      .test("fileSize", "The file is too large", (value) => {
        if (value.length > 0) return value[0]?.size <= FILE_SIZE;
        return true;
      }),
    genres: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string(),
        })
      )
      .test("notEmptyArr", "array is empty", (value) => {
        return value[0].name && value.length > 0;
      }),
    actors: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string(),
        })
      )
      .test("notEmptyArr", "array is empty", (value) => {
        return value[0].name && value.length > 0;
      }),
    budget: Yup.number().min(0).typeError("budget must be a number").nullable(),
    releaseDate: Yup.date()
      .typeError("Release Date is required and  must be a valid date")
      .required(),
    description: Yup.string().test(
      "len",
      "Maximum number of chars is 500",
      (val) => val.length <= 500
    ),
  });

  const {
    register,
    handleSubmit,
    control,
    errors,
    formState,
    setValue,
  } = useForm({
    mode: "onSubmit",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
    shouldFocusError: true,
    reValidateMode: "onChange",
  });
  const { isDirty, isValid } = formState;
  console.log("form state", formState);
  const onSubmit = (data) => {
    console.log("data", data);
    dispatch(moviesActions.addNewMovieRequest(data));
  };

  const uploadImg = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    dispatch(moviesActions.uploadImg(file));
  };
  useEffect(() => {
    //when component mount get allmoviegenres
    dispatch(moviesActions.genresRequest());
  }, []);

  const handleGenresOptions = () => {
    if (genres) {
      return genres.map((genre) => {
        return {
          key: genre.id,
          value: genre.name,
        };
      });
    } else {
      return [];
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3 className="text-center">Add New Movie</h3>
          {formState.isValid && (
            <div className="success">Form submitted successfully</div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              kind="input"
              type="text"
              name="title"
              label="Movie Title"
              control={control}
              errors={errors}
              register={register}
              astric="add"
            />
            <FormControl
              kind="input"
              type="file"
              name="poster"
              label="Movie Poster"
              control={control}
              errors={errors}
              register={register}
              accept="image/*"
              astric="add"
              onChange={(e) => uploadImg(e)}
            />
            <FormControl
              kind="input"
              type="number"
              name="budget"
              label="Movie Budget"
              control={control}
              errors={errors}
              register={register}
            />
            <FormControl
              kind="date"
              name="releaseDate"
              label="Release Date"
              control={control}
              errors={errors}
              astric="add"
            />
            <FormControl
              kind="textarea"
              name="description"
              label="Description"
              control={control}
              errors={errors}
              maxLength="500"
            />

            <FormControl
              kind="inputArray"
              name="actors"
              label="Movie Actors"
              errors={errors}
              control={control}
              astric="add"
            />
            <FormControl
              kind="SelectArray"
              name="genres"
              label="Movie Genres"
              control={control}
              errors={errors}
              options={handleGenresOptions()}
              astric="add"
            />
            <div className="my-4 text-center">
              {/* <button type="submit">submit</button> */}
              <Btn text="Add New Movie" type="submit" className="generalBtn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewMovie;
