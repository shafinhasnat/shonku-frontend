import axios from "axios";
export function create_app({ app_name }) {
  const payload = {
    app_name,
  };
  return axios.post("/create-app", payload);
}
export function upload_app({ file, app_name, language }) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("app_name", app_name);
  formData.append("language", language);
  const config = {
    "Content-Type": "multipart/form-data",
  };
  return axios.post("/upload-app", formData, config);
}
export function initialize_build(app_name) {
  return axios.get(`/initialize-build/${app_name}`);
}
export function build({ app_name }) {
  const payload = {
    app_name,
  };
  return axios.post("/build", payload);
}

export function deploy({ app_name }) {
  const payload = {
    app_name,
  };
  console.log(payload);
  return axios.post("/deploy", payload);
}
export function up(app_name) {
  return axios.get(`/up/${app_name}`);
}
export function down(app_name) {
  return axios.get(`/down/${app_name}`);
}
export function all_projects() {
  return axios.get("/projects");
}
export function launch({ app_name }) {
  const payload = {
    app_name,
  };
  console.log(payload);
  return axios.post("/launch-mongo", payload);
}
