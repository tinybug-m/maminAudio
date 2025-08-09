import { getIton } from "@/utils";
import { Typography, Button, Grid, Stack } from "@mui/material";

import { Suspense } from "react";
import React from "react";

const ContactOptionCard = (props) => {
  const { title, desc, buttons, desctag } = props.datas;

  return (
    <Grid
      container
      alignItems={"start"}
      flexDirection={"column"}
      gap={1}
      sx={{
        background: "rgb(255 255 255 / 75%)",
        borderRadius: 4,
        py: 4,
        px: { xs: 3, sm: 8 },
        display: "flex",
      }}
    >
      <Typography variant="h5" color="initial">
        {title}
      </Typography>
      <Typography variant={desctag} color="grey">
        {desc}
      </Typography>
      <Stack direction="row" spacing={1}>
        {buttons.map((button) => {
          const SelectedIcon = getIton(button.icon);
          return (
            <Button
              onClick={() => window.open(`${button.link}`)}
              variant="contained"
              color="primary"
            >
              <Suspense fallback={<>loading</>}>
                <SelectedIcon sx={{ mr: "8px" }} color="inherit" />
              </Suspense>
              {button.title}
            </Button>
          );
        })}
      </Stack>
    </Grid>
  );
};

export default ContactOptionCard;
