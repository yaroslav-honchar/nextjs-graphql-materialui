import React from "react"
import { Image } from "@/shared/components/Image"
import { Container } from "@mui/material"

export const MainHero: React.FC = () => {
  return (
    <Container
      maxWidth={"xl"}
      component={"section"}
    >
      <Image
        sx={{
          width: "100%",
          height: "auto",
          minHeight: 400,
          objectFit: "cover",
          borderRadius: 4,
        }}
        src={
          "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/pQvqGK6KQDILL7SJrhMQsRvJfLB.jpg"
        }
        alt={"poster"}
        width={1920}
        height={600}
      />
    </Container>
  )
}
