import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response, onOpen, formik]);

  return (
    <FullScreenSection
      as="section" 
      isDarkBackground 
      backgroundColor="#512DA8" 
      py={16} 
      spacing={8}
      width="100%"
    >
      <VStack
        w="100%"
        p={22} 
        alignItems="flex-start"
      >
        <Heading 
          as="h1" 
          paddingLeft={3}
          id="contactme-section"
        >
          Contact me
        </Heading>
        <Box 
          p={6} 
          rounded="md" 
          w="100%"
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack 
              spacing={4}
              width="100%"
            >
              <FormControl 
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel 
                  htmlFor="firstName">Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  alt="name"
                  title="Name"
                  cursor="pointer"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>
                  {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>
              <FormControl 
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel 
                  htmlFor="email">
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  alt="email address"
                  title="Email Address"
                  cursor="pointer"
                  {...formik.getFieldProps("email")}
                  autoComplete="email"
                />
                <FormErrorMessage>
                  {formik.errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel 
                  htmlFor="type"
                >
                  Type of enquiry
                </FormLabel>
                <Select
                  id="type"
                  name="type"
                  alt="enquiry type"
                  title="Enquire Type"
                  cursor="pointer"
                  {...formik.getFieldProps("type")}
                >
                  <option 
                    value="hireMe" 
                    style={{ color: "black" }}
                  >
                    Freelance project proposal
                  </option>
                  <option 
                    value="openSource" 
                    style={{ color: "black" }}
                  >
                    Open source consultancy session
                  </option>
                  <option 
                    value="other" 
                    style={{ color: "black" }}
                  >
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl 
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel 
                  htmlFor="comment"
                >
                  Your message
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  alt="comment"
                  title="Comment"
                  cursor="pointer"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button 
                type="submit" 
                colorScheme="purple" 
                width="full"
                alt="submit"
                title="Submit"
                cursor="pointer"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
