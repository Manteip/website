import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import projectsBackground from "../../public/backgrounds/roadmap.jpg";
import nowcastingBackground from "../../public/backgrounds/nowcasting.jpg";
import openEnergyBackground from "../../public/backgrounds/open-energy.jpg";
import mappingBackground from "../../public/backgrounds/mapping.jpg";
import Layout from "../../components/layout";

const ProjectTeaser = ({
  name,
  description,
  link,
  image,
}: {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
}) => {
  return (
    <div className="grid mt-8 sm:grid-cols-2 text-ocf-black-100 gap-x-8">
      <div className="flex items-center justify-center max-w-md px-8 mx-auto text-center sm:text-left">
        <div className="">
          <h3 className="mb-4 text-3xl">{name}</h3>
          <p>{description}</p>
          <Link href={link}>
            <a className="inline-block px-8 py-5 my-8 text-white rounded-md sm:mb-0 bg-ocf-black-100">
              Learn More
            </a>
          </Link>
        </div>
      </div>
      <div className="relative hidden max-w-md mr-8 h-80 sm:block">
        <Image
          src={image}
          alt="Background image displaying clouds"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

function ProjectTeaserSpacer() {
  return (
    <div className="w-full">
      <div className="mx-8 mt-8 mb-10 border-t border-gray-300" />
    </div>
  );
}

const Projects: NextPage = () => {
  const teaserText =
    "Our projects cover a variety of topics. Currently, we help locate solar panels, open up energy data and predict how much solar electricity will be produced.";

  return (
    <Layout
      bgImage={projectsBackground}
      title="Projects"
      teaserText={teaserText}
      description={teaserText}
      isTextPage={false}
    >
      <ProjectTeaser
        name="Nowcasting"
        description="Forecasting solar photovoltaic (PV) power production is hard: As clouds move over PV panels, the power output moves up and down rapidly."
        link="/projects/nowcasting"
        image={nowcastingBackground}
      />
      <ProjectTeaserSpacer />
      <ProjectTeaser
        name="Solar Panel Mapping"
        description="To accurately forecast solar power generation, we need to know where all the PV panels are. That is still largely unknown today in the UK."
        link="/projects/pv-mapping"
        image={mappingBackground}
      />
      <ProjectTeaserSpacer />
      <ProjectTeaser
        name="Open Energy Data"
        description="Data is needed for everything: To balance the grid, to decide where to install the next wind farm, to train machine learning models and more."
        link="/projects/open-energy-data"
        image={openEnergyBackground}
      />
    </Layout>
  );
};

export default Projects;
