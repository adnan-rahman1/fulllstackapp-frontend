"use client"; // This is a client component

import { Grid, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import mongodb from "../../../public/assets/mongodb.svg";
import mysql from "../../../public/assets/mysql.svg";
import ansible from "../../../public/assets/ansible.svg";
import reactjs from "../../../public/assets/reactjs.svg";
import springboot from "../../../public/assets/springboot.svg";
import docker from "../../../public/assets/docker.svg";
import aws from "../../../public/assets/aws.svg";
import kubernetes from "../../../public/assets/kubernetes.svg";
import terraform from "../../../public/assets/terraform.svg";
import jenkin from "../../../public/assets/jenkin.svg";
import jest from "../../../public/assets/jest.svg";
import cucumber from "../../../public/assets/cucumber.svg";
import nginx from "../../../public/assets/nginx.svg";
import git from "../../../public/assets/git.svg";
import nodejs from "../../../public/assets/nodejs.svg";
import redis from "../../../public/assets/redis.svg";
import vault from "../../../public/assets/vault.svg";
import postgresql from "../../../public/assets/postgresql.svg";
import SectionTitle from "./SectionTitle";

const SpecialtiesSection = () => {
  return (
    <>
      <SectionTitle
        title="Our Specialties"
        subTitle="We use a variety of technologies to achieve the best results."
      />

      <Grid item xs={11} sm={11} md={10} lg={8}>
        <Marquee gradient={false} direction="right">
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={docker}
            alt="docker"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={kubernetes}
            alt="kubernetes"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={terraform}
            alt="terraform"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={jenkin}
            alt="jenkin"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={ansible}
            alt="ansible"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={jest}
            alt="jest"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={cucumber}
            alt="cucumber"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={nginx}
            alt="nginx"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={aws}
            alt="aws"
          />
        </Marquee>
        <Marquee gradient={false}>
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={mysql}
            alt="mysql"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={mongodb}
            alt="mongodb"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={reactjs}
            alt="reactjs"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={springboot}
            alt="springboot"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={vault}
            alt="vault"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={postgresql}
            alt="postgresql"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={git}
            alt="git"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={nodejs}
            alt="nodejs"
          />
          <Image
            width={250}
            style={{
              paddingLeft: "8px",
              paddingRight: "8px",
              width: "auto",
              height: "auto",
            }}
            src={redis}
            alt="redis"
          />
        </Marquee>
      </Grid>
    </>
  );
};

export default SpecialtiesSection;
