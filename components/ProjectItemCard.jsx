import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectItemCard = React.memo(
  ({ title, imageUrl, description, githubLink }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.8 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="rounded-lg "
      >
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          <div className="max-w-[25rem] w-full h-full transition-transform duration-300 m-auto border border-gray-700 hover:border-secondary px-4 py-6 rounded-lg hover:scale-[102%]">
            <div className="relative w-full h-48 items-center justify-center flex">
              <Image
                src={imageUrl}
                alt={title}
                width={150}
                height={150}
                objectFit="cover"
                className="rounded-lg"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-bold text-center py-2">{title}</h2>
            <p className="text-center text-HeadingGray">{description}</p>
          </div>
        </Link>
      </motion.div>
    );
  }
);

ProjectItemCard.displayName = "ProjectItemCard";

export default ProjectItemCard;
