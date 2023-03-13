import Image from "next/image";
import { ProjectDocumentData } from "@/.slicemachine/prismicio";
import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const ProjectCard: FC<{ uid: string; data: ProjectDocumentData }> = ({
  uid,
  data,
}) => {
  return (
    <Link href={`/projects/${uid}`}>
      <div className="card 2-80 lg:w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <Image
            src={data.thumbnail.url!}
            alt={data.thumbnail.alt || "project thumbnail"}
            width={400}
            height={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <div>
            <PrismicRichText field={data.description} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
