import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton,
  SimpleShowLayout,
  Show,
  ShowButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  useRecordContext,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <EditButton label="编辑" />
      <ShowButton label="查看" />
      <DeleteButton label="删除" />
    </Datagrid>
  </List>
);

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      {/* <ReferenceInput source="userId" reference="users" /> */}
      <TextInput source="title" />
      {/* <TextInput source="description" multiline rows={5} /> */}
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="teaser" />
      {/* <RichTextField source="body" /> */}
      {/* <DateField label="Publication date" source="published_at" /> */}
    </SimpleShowLayout>
  </Show>
);
