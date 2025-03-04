import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumsList";

function UsersListItem ({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  const header = <>
    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
      <GoTrashcan />
    </Button>
    {error && <div>Error Deleting!!</div>}
    {user.name}
  </>;


  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;