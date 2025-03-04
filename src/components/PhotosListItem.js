import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";

function PhotosListItem ({ photo }) {
  const [ removePhoto ] = useRemovePhotoMutation();

  const handleDelete = () => {
    removePhoto(photo);
  }

  return (
    <div className="relative m-2 cursor-pointer" onClick={handleDelete}>
      <img className="h-20 w-20" src={photo.url} alt="random" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotosListItem;