import React, { useState } from 'react';
import MainLayout from '../layouts/main-layout';
import { Button, ListGroup } from 'react-bootstrap';
import { projectsAPI } from '../api/projects';
import { Project } from '../global/interfaces';

interface Props {
  projects: Project[]
}

const Home: React.FC<Props> = (props) => {


  return (
    <MainLayout>

    </MainLayout>
  )
}

export async function getServerSideProps() {
  const projects = await projectsAPI.getAll();

  return {
    props: { projects }
  }
}

export default Home;
