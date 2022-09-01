import React from 'react'
import { View } from 'react-native'
import { Card, Title, Paragraph, Text } from 'react-native-paper'
import { cardStyle } from './card.style'
import { Link } from '@react-navigation/native'

export const CardComponent = ({
  body,
  comments,
  image,
  postId,
  title,
  user
}) => {
  
  function ellipsify(str) {
    if (str.length > 100) {
      return str.substring(0, 100) + '...'
    } else {
      return str
    }
  }

  return (
    <View style={cardStyle.view}>
      <Link to={{ screen: 'Detail', params: { id: postId } }}>
        <Card style={cardStyle.card}>
          <Card.Title title={title} subtitle={'Post ID: ' + postId} />
          <Card.Cover source={{ uri: image }} style={cardStyle.image} />
          <Card.Content style={cardStyle.content}>
            <Text style={cardStyle.body}>{ellipsify(body)}</Text>
            <Paragraph style={cardStyle.paragraph}></Paragraph>
            <Paragraph style={cardStyle.paragraph}>
              {comments 
              ? <Text>{comments.length} comentarios.</Text>
              : <Text> Todavía no hay comentarios.</Text>}
            </Paragraph>
          </Card.Content>
          <Text style={cardStyle.bottomLine}>
            Creado por <Text style={{fontWeight: 'bold', color: 'red' }}>{user.username}</Text>
          </Text>
        </Card>
      </Link>
    </View>
  )
}