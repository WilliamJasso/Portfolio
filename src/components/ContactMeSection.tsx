'use client';

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  FieldRoot,
  FieldLabel,
  FieldErrorText,
  Input,
  Textarea,
  HStack,
  Button,
  Toaster,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastIndicator,
  ToastCloseTrigger,
  createToaster,
  chakra,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import fakeApi from '@/lib/fakeApi';

type FormValues = {
  firstName: string;
  email: string;
  type: string;
  comment: string;
};

export default function ContactMeSection() {
  const toaster = createToaster({ placement: 'top-end' });

  const validationSchema = Yup.object({
    firstName: Yup.string().min(2, 'Too short').max(50, 'Too long').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    type: Yup.string().oneOf(['hireMe', 'openSource', 'other'], 'Select a type').required('Required'),
    comment: Yup.string().min(10, 'Minimum 10 characters').required('Required'),
  });

  const formik = useFormik<FormValues>({
    initialValues: { firstName: '', email: '', type: '', comment: '' },
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        await fakeApi(values);
        toaster.create({ type: 'success', title: `Thanks, ${values.firstName}!`, description: 'Your message was sent successfully.' });
        helpers.resetForm();
      } catch (error: unknown) {
        const message = typeof error === 'object' && error && 'message' in error ? String((error as { message?: string }).message) : 'Please try again later';
        toaster.create({ type: 'error', title: 'Something went wrong', description: message });
      } finally {
        helpers.setSubmitting(false);
      }
    },
  });

  const fp = (name: keyof FormValues) => ({ ...formik.getFieldProps(name) });

  return (
    <Box as="section" id="contactme-section" minH="100dvh" display="grid" alignItems="center" bg="gray.100">
      <Container maxW="3xl" py={16}>
        <VStack align="stretch" gap={6}>
          <Heading size="xl">Contact Me</Heading>
          <Text color="gray.600">Drop me a line. I’ll get back to you ASAP.</Text>

          <chakra.form onSubmit={formik.handleSubmit} bg="white" p={6} borderRadius="2xl" shadow="md">
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              <FieldRoot invalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                <FieldLabel>First name</FieldLabel>
                <Input placeholder="Jane" {...fp('firstName')} />
                <FieldErrorText>{formik.errors.firstName}</FieldErrorText>
              </FieldRoot>

              <FieldRoot invalid={formik.touched.email && Boolean(formik.errors.email)}>
                <FieldLabel>Email</FieldLabel>
                <Input type="email" placeholder="jane@doe.com" {...fp('email')} />
                <FieldErrorText>{formik.errors.email}</FieldErrorText>
              </FieldRoot>

              <FieldRoot invalid={formik.touched.type && Boolean(formik.errors.type)}>
                <FieldLabel>Type of enquiry</FieldLabel>
                <Box as="select" {...fp('type')}>
                  <option value="" disabled hidden>
                    Select...
                  </option>
                  <option value="hireMe">Hire me</option>
                  <option value="openSource">Open source</option>
                  <option value="other">Other</option>
                </Box>
                <FieldErrorText>{formik.errors.type}</FieldErrorText>
              </FieldRoot>

              <Box display={{ base: 'none', md: 'block' }} />

              <FieldRoot invalid={formik.touched.comment && Boolean(formik.errors.comment)} gridColumn={{ md: '1 / -1' }}>
                <FieldLabel>Message</FieldLabel>
                <Textarea rows={5} placeholder="Tell me a bit about your project…" {...fp('comment')} />
                <FieldErrorText>{formik.errors.comment}</FieldErrorText>
              </FieldRoot>
            </SimpleGrid>

            <Box my={6} borderTopWidth="1px" borderColor="gray.200" />
            <HStack justify="flex-end">
              <Button type="submit" colorPalette="teal" loading={formik.isSubmitting} loadingText="Sending">
                Send message
              </Button>
            </HStack>
          </chakra.form>
        </VStack>
        <Toaster toaster={toaster}>
          {(toast) => (
            <ToastRoot>
              <ToastIndicator />
              <Box>
                {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
                {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
              </Box>
              <ToastCloseTrigger />
            </ToastRoot>
          )}
        </Toaster>
      </Container>
    </Box>
  );
}
