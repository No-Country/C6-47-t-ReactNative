import React from 'react'
import { View } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper'
import { cardStyle } from './card.style';

export const CardComponent = ({body,comments,image,postId,title,userId}) => {
  return (
    <View style={cardStyle.view}>
      <Card>
        <Card.Title
          title={title}
          subtitle={'Post ID: ' + postId}
        />
        <Card.Content style={cardStyle.content}>
          <Paragraph>{body}</Paragraph>
          <Paragraph>Comentarios: {comments && comments.map((comment, index) => <Text key={index}>{comment}</Text>)}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: image }} style={cardStyle.image}/>
        <Text style={cardStyle.bottomLine}>Creado por el usuario con el userID {userId}</Text>
      </Card>
    </View>
  )
}


/*
 <Card.Actions>
    <Button>Cancel</Button>
    <Button>Ok</Button>
  </Card.Actions>
*/