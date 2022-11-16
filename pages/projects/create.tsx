import React from 'react';
import MainLayout from '../../layouts/main-layout';
import { Button, Form, FormText } from 'react-bootstrap';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { projectsAPI } from '../../api/projects';
import { useRouter } from 'next/router';

const validationSchema = yup
  .object()
  .shape({
    name: yup.string().required('Введите название'),
    description: yup.string().required('Введите описание')
  });

const CreatePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await projectsAPI.create({
        name: data.name,
        userId: '6f2afdbc-c13f-4b8a-836a-a57bbe11ed84'
      });

      console.log(response);
      await router.push('/projects');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainLayout>
      <h1>Создать новый проект</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название</Form.Label>
          <Form.Control type="text" {...register('name')} isInvalid={!!errors.name} />
          {errors.name && (
            <Form.Text className="text-danger">
              {errors?.name.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Описание</Form.Label>
          <Form.Control as="textarea" rows={3} {...register('description')} isInvalid={!!errors.description} />
          {errors.description && (
            <Form.Text className="text-danger">
              {errors?.description.message}
            </Form.Text>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Создать проект
        </Button>
      </Form>
    </MainLayout>
  );
};

export default CreatePage;