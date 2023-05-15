import { ISession } from "@/app/apis/types";
import moment from "moment";
import Image from "next/image";

interface Props {
  data: ISession;
}

const Program: React.FC<Props> = ({ data }) => {
  return (
    <div className="pace-y-3">
      <Image
        className="aspect-video w-full md:w-[300px] rounded-md"
        src={data?.program[0]?.thumbnail_img_url}
        alt={data?.program[0]?.display_title}
        width={200}
        height={50}
      />
      <p className="text-md">{data?.program[0]?.display_title}</p>
      <p className="font-light text-sm">
        {moment(data?.start_date).format("DD MMM")} -{" "}
        {moment(data?.end_date).format("DD MMM")}
      </p>
    </div>
  );
};

export default Program;
