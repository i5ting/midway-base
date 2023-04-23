import { Admin, Resource } from "react-admin";
import { fetchUtils } from "ra-core";
import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { PostList, PostEdit, PostCreate, PostShow } from "./posts";
import { UserList } from "./users";
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";

import simpleRestProvider from "ra-data-simple-rest";

// const dataProvider = simpleRestProvider(
//   "http://localhost:7001",
//   fetchUtils.fetchJson,
//   "X-Total-Count"
// );

// const dataProvider = jsonServerProvider("http://127.0.0.1:7001");

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
      show={PostShow}
    />
    <Resource
      name="users"
      list={UserList}
      icon={UserIcon}
      recordRepresentation="name"
    />
  </Admin>
);

export default App;
