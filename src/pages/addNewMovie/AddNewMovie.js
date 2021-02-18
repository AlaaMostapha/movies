import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import * as moviesActions from "../../redux/actions/movies";
import { postImage } from "../../network/apis/images";
import FormControl from "../../components/form/FormControl";
const AddNewMovie = () => {
  //ACTIONS DISPATCH
  const dispatch = useDispatch();
  const {
    moviesReducer: { genres },
  } = useSelector((state) => state);
  //REACT-HOOK-FORM
  const schema = Yup.object().shape({
    title: Yup.string()
      .test("len", "Maximum number of chars is 50", (val) => val.length <= 50)
      .required("title is required"),
    poster: Yup.mixed()
      .required("poster is required")
      .test("fileSize", "The file is too large", (value) => {
        return value && value[0].size <= 2000000;
      }),
    genres: Yup.array().required("required"),
    actors: Yup.array().required("one actor at least is required"),
    budget: Yup.number()
      .typeError("budget must be a number")
      .positive("budget must be positive"),
    releaseDate: Yup.date()
      .typeError("Release Date is required and  must be a valid date")
      .required(),
    description: Yup.string().test(
      "len",
      "Maximum number of chars is 500",
      (val) => val.length <= 500
    ),
  });
  const defaultValues = {
    title: "",
    poster: "",
    genres: [""],
    actors: [""],
    budget: 0,
    releaseDate: null,
    description: "",
  };
  const { register, handleSubmit, control, errors, formState } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
    shouldFocusError: true,
    reValidateMode: "onChange",
  });
  const { isDirty, isValid } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };

  const uploadImg = (e) => {
    const file = e.target.files[0];
    console.log("Uploaded a file", e.target.files[0].name);
    moviesActions.uploadImg(file);
    console.log(postImage(file));
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
          <h3 className="text-center">Add new movie</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              kind="input"
              type="text"
              name="title"
              label="Movie Title"
              control={control}
              errors={errors}
              s="d"
            />
            <FormControl
              kind="input"
              type="file"
              name="poster"
              label="Movie Poster"
              control={control}
              errors={errors}
              // value={}
              onChange={(e) => uploadImg(e)}
              accept=".png, .jpg, .jpeg"
            />
            <FormControl
              kind="input"
              type="number"
              name="budget"
              label="Movie Budget"
              control={control}
              errors={errors}
            />
            <FormControl
              kind="date"
              name="releaseDate"
              label="Release Date"
              control={control}
              errors={errors}
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
              control={control}
              errors={errors}
              register={register}
            />
            <FormControl
              kind="SelectArray"
              name="genres"
              label="Movie Genres"
              control={control}
              errors={errors}
              options={handleGenresOptions()}
            />
            <div className="my-4">
              <button type="submit">submit</button>
              {/* <button type="submit" disabled={!isDirty || !isValid}>
                submit
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewMovie;
