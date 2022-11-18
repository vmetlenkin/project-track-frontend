import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/main-layout';
import { Badge, Col, Row, Table } from 'react-bootstrap';
import Button from '../../components/ui/button/button';

const tasks = [
  {
    id: 0,
    name: 'Launch ProjectTrack',
    priority: 'Критическая',
    author: 'Владислав Метленкин',
    text: `YouTrack — это инструмент управления проектами, который адаптируется под потребности различных команд в
            компании. В YouTrack можно планировать проекты и отслеживать задачи, использовать Agile-доски,
            организовывать спринты и релизы, вести базу знаний, использовать диаграмму Ганта создавать отчёты и панели
            мониторинга, настраивать рабочие процессы. YouTrack полностью подстраивается под бизнес-процессы различных
            команд — от небольших стартапов до корпораций.`
  },
  {
    id: 2342342,
    name: 'Задача 1',
    priority: 'Критическая',
    author: 'Владислав Метленкин',
    text: `Cannot get description for AWS Connection" is shown for the AWS Credentials build feature uses wrong credential`
  },
  {
    id: 234222,
    name: 'Задача 2',
    priority: 'Критическая',
    author: 'Владислав Метленкин',
    text: `Cannot get description for AWS Connection" is shown for the AWS Credentials build feature uses wrong credential`
  },
  {
    id: 2342233,
    name: 'Задача 3',
    priority: 'Критическая',
    author: 'Владислав Метленкин',
    text: `Cannot get description for AWS Connection" is shown for the AWS Credentials build feature uses wrong credential`
  }
];

const ProjectPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [currentTask, setCurrentTask] = useState(tasks[0]);

  return (
    <MainLayout>
      <h1>Проект {pid}</h1>
      <h2>Задачи</h2>
      <Row>
        <Col>
          <Table>
            <thead>
            <tr>
              <th>Заголовок задачи</th>
              <th>Приоритет</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map(task => (
              <tr key={task.id} onClick={() => setCurrentTask(task)} role="button">
                <td>
                  <Badge pill bg="danger">
                    К
                  </Badge>
                  {task.name}
                </td>
                <td>{task.priority}</td>
              </tr>
            ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <span>Автор {currentTask.author}</span>
          <h3>{currentTask.name}</h3>
          <p>{currentTask.text}</p>
          <Button>Удалить</Button>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default ProjectPage;
