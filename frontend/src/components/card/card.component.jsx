import React from 'react'
import { Card, Title, Paragraph, Text } from 'react-native-paper'

export const CardComponent = ({body,comments,image,postId,title,userId}) => {
  return (
    <Card>
      <Card.Title
        title={title}
        subtitle={'Post ID: ' + postId}
      />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{body}</Paragraph>
        <Paragraph>Comentarios: {comments && comments.map((comment, index) => <Text key={index}>{comment}</Text>)}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: image }} />
      <Text>Creado por el usuario con el userID {userId}</Text>
     
    </Card>
  )
}


/*
 <Card.Actions>
    <Button>Cancel</Button>
    <Button>Ok</Button>
  </Card.Actions>
*/