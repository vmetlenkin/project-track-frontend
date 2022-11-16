import React, { useState } from 'react';
import { Project } from '../../global/interfaces';
import { projectsAPI } from '../../api/projects';
import { Button, ListGroup } from 'react-bootstrap';
import MainLayout from '../../layouts/main-layout';
import Link from 'next/link';

interface Props {
  projects: Project[]
}

const ProjectsPage: React.FC<Props> = (props) => {
  const [projects, setProjects] = useState(props.projects);

  const remove = async (id: string) => {
    try {
      const response = await projectsAPI.remove(id);
      console.log(response);

      setProjects(projects.filter(project => project.id !== id));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <MainLayout>
      <div className="d-flex justify-content-end mb-4">
        <Link href="/projects/create">
          <Button variant="primary">
            Создать
          </Button>
        </Link>
      </div>
      <ListGroup>
        {!projects.length && 'Проектов нет'}
        {projects.map((project) =>
          <ListGroup.Item key={project.id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>{project.name}</div>
              <Button variant="danger" onClick={() => remove(project.id)}>Удалить</Button>
            </div>
          </ListGroup.Item>
        )}
      </ListGroup>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const projects = await projectsAPI.getAll();

  return {
    props: {projects}
  }
}

export default ProjectsPage;