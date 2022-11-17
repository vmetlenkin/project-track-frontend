import React, { useState } from 'react';
import { Project } from '../../global/interfaces';
import { projectsAPI } from '../../api/projects';
import { Button, Card, ListGroup } from 'react-bootstrap';
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
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Link href={`/projects/${project.id}`} passHref>
                  <Card.Title>{project.name}</Card.Title>
                </Link>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
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