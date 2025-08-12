import React, { useState, useRef } from "react";

import {
  AccountCircle as AccountCircleIcon,
  Category as CategoryIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Email as EmailIcon,
  Subject as SubjectIcon,
  Title as TitleIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

import MaminSnack from "@/components/universal/MaminSnack";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendContactForm } from "@/utils/api";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const childRef = useRef(null);

  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup
        .string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        .required(),
      topic: yup.string().required(),
      subject: yup.string().required(),
      description: yup.string().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitted },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await sendContactForm(data);
      if (res.success) {
        reset();
        childRef.current.getAlert("Message sent successfully!");
      } else {
        childRef.current.getAlert("Something went wrong!");
      }
    } catch (error) {
      childRef.current.getAlert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: "rgb(255 255 255 / 75%)",
        py: 4,
        px: 3,
        borderRadius: 5,
      }}
    >
      <MaminSnack ref={childRef} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              placeholder="Full Name"
              id="outlined-start-adornment"
              fullWidth
              error={!!errors.name && (touchedFields.name || isSubmitted)}
              {...register("name")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon color={"primary"} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              placeholder="info@mamina..."
              id="outlined-start-adornment"
              fullWidth
              error={!!errors.email && (touchedFields.email || isSubmitted)}
              {...register("email")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color={"primary"} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Topic"
              placeholder="Select topic"
              error={!!errors.topic && (touchedFields.topic || isSubmitted)}
              {...register("topic")}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CategoryIcon color={"primary"} />
                  </InputAdornment>
                ),
              }}
              select
            >
              <MenuItem value="Producing">Producing</MenuItem>
              <MenuItem value="Mix mastering">mix mastering</MenuItem>
              <MenuItem value="Both">both</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="select"
              label="Subject"
              placeholder="Write about your project subject"
              error={!!errors.subject && (touchedFields.subject || isSubmitted)}
              {...register("subject")}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon color={"primary"} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              placeholder="Write about your project"
              error={
                !!errors.description &&
                (touchedFields.description || isSubmitted)
              }
              {...register("description")}
              fullWidth
              multiline
              minRows={3}
              maxRows={8}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{ alignSelf: "baseline", pt: 1 }}
                    position="start"
                  >
                    <SubjectIcon color={"primary"} />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              disabled={loading}
              type="submit"
              sx={{ px: 10 }}
              variant="contained"
              disableElevation
            >
              <ChatBubbleOutlineIcon sx={{ mr: 0.5 }} />
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
