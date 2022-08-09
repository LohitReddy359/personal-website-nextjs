import Image from "next/image";
import mypic from "../../assets/MyPicture.png";

function MyPic() {
  return (
    <div className="my-pic">
      <Image src={mypic} />
    </div>
  );
}

export default MyPic;