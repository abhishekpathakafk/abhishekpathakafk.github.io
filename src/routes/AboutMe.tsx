import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export function AboutMe(style?: React.CSSProperties) {
  return (
    <div style={style}>
      <Card style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CardMedia
          component="img"
          image="profilepic.jpg"
          style={{height:"50%",margin:"10px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hello There
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I am Abhishek Pathak, a dedicated and innovative Technical Artist with a strong passion for merging artistic creativity with technical excellence. With a background in Electronics and Communication Engineering from NIT Kurukshetra, I have cultivated a unique skill set that allows me to bridge the gap between art and technology, enhancing the visual and interactive aspects of gaming experiences.
            My journey in the gaming industry began as a Unity Game Developer at iMuons Web Solutions, where I designed, developed, and optimized gameplay mechanics for mobile games. Collaborating closely with artists and designers, I ensured the seamless integration of assets, animations, and visual effects, resulting in captivating user experiences. Through my experiences, I honed my abilities in 3D modeling, shader development, scripting, and cross-disciplinary collaboration.
            I possess a strong proficiency in shader development using GLSL, allowing me to create visually immersive environments that captivate players. My programming skills extend to C++, C#, and TypeScript, enabling me to craft interactive elements, game mechanics, and scripting functionalities that enhance user engagement.
            In addition to my technical expertise, my background includes rigging, texturing, and animating models, adding life and depth to virtual worlds. I have a keen eye for detail and a deep understanding of optimization techniques, ensuring that visual quality remains uncompromised while maintaining optimal performance.
            I am deeply inspired by industry leaders like Riot Games, Ubisoft, and Epic Games, known for pushing the boundaries of interactive entertainment. The prospect of contributing my skills to renowned studios and being part of groundbreaking projects drives my passion and commitment to excellence.
            When not crafting virtual experiences, you can find me staying up-to-date with industry trends, experimenting with new techniques, and collaborating with fellow creatives. I am excited about the future of interactive entertainment and eager to continue pushing the boundaries of what's possible.
            Thank you for considering my profile. I look forward to the opportunity to contribute my skills, creativity, and technical acumen to projects that reshape the gaming landscape.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://www.linkedin.com" target="_blank">LinkedIN</Button>
          <Button size="small" href="https://www.github.com" target="_blank">Github</Button>
        </CardActions>
      </Card>
    </div>
  );
}