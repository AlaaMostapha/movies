import axios from "axios";
export const postImage = async (img) => {
  var form = new FormData();
  form.append("file", img, img.name);

  var settings = {
    url: "https://boiler-stage.ibtikar.sa/api/v1/users/upload-image",
    method: "POST",
    timeout: 0,
    headers: {
      "Accept-Language": "en",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMmUxNjY3ZGUzN2M2MDY1OGRjYTcyMmU1MGZmMWJlMDUxNjAyYmExMzgzZGJhOTQ1ZTQ1Y2ZlYzg5N2IxZGY0YjEwMTYzZDNiMTdjMjhhOWMiLCJpYXQiOjE2MTM1Nzk2MDksIm5iZiI6MTYxMzU3OTYwOSwiZXhwIjoxNjQ1MTE1NjA5LCJzdWIiOiI2Iiwic2NvcGVzIjpbIioiXX0.TYUA4KC7K6zDpYhIjjjrpq8VUU4st1MvCLUo45K9BqQkSORgoNftit-F-K_UtQicw9vPwa6RivJ7qyaH8Hy4nrH4dABEcs-w0N-Hyi-aWU82Y-XStAJkitd2atjN7cSeMFOx8T6ZIEFAwzepvFJSEtaKf2uieB56LHQ3zGLMhEDC7UqhmLo5hKmr-kPWtnuCvCS8oOZYW4EANqD0EHvCCl3U6yEbzamgpaQnTGb9THNfMhPsp_GGAOxtQ51UtW9xVbF9menTRKJhFscSEUDCt1jvk5TvciDXaNk11kNiaf4TEGHL4ycaElE4tr-76eeVmUJpXXmh0_TcWHnM5nzSGTCZGwiOjdnD4sfg2WZIs1xRL9DqH-epOBom3wJmDUK1xO-1HhylAa6uqU4IdOE97suNoFlWMDvZMAYBAabDE01W6iuo3mYrt0ahFGhcuddvnu8DnrmpKnv_E50-TtL9eIe4_kL8Jb6v8e42a-2J_veHOmQHts2G5yT7uqI_k7ZO1fh0-306-nETlXY5YWfVGNlOodUnvdiEThfP-QwrzWgm3PL_y10bo2-ZcE8TDWgeOpGN60Z4i9N-RrbtViH9SVekszJl31n4H0q4F4DAo2SyTFR5L1580AHdJUNHCBoqQbIEDXFHZqkDnYFeJcbjQbxbOACOweqkxdsNSgN8eHk",
      "X-Api-Key": "boilerplate_react",
    },
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };
  return await axios(settings);
};
