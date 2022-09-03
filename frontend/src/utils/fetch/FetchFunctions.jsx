import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAxios } from '../customHooks/useAxios'
import {
  fetchPosts,
  fetchPostsById,
  fetchTags
} from '../../features/posts/postsSlice'

function FetchFunctions({ children }) {
  const dispatch = useDispatch()

  const api = useAxios()

  const currentPage = useSelector((state) => state.posts.currentPage)
  const postId = useSelector((state) => state.posts.postId)
  const wordFilter = useSelector((state) => state.posts.wordFilter)
  const tagFilter = useSelector((state) => state.posts.tagFilter)

  useEffect(() => {
    try {
      api.get('/tag').then((res) => {
        dispatch(fetchTags(res.data))
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    try {
      if (currentPage == null) return
      else
        api
          .get(
            `/post?page=${currentPage}${
              wordFilter ? `&word=${wordFilter}` : ''
            }${tagFilter ? `&tag=${tagFilter}` : ''}`
          )
          .then((res) => {
            dispatch(fetchPosts(res.data))
          })
    } catch (error) {
      dispatch(fetchPosts(error))
    }
  }, [currentPage, wordFilter, tagFilter])

  useEffect(() => {
    try {
      if (postId == null) dispatch(fetchPostsById(null))
      else
        api.get(`/post/${postId}`).then((res) => {
          dispatch(fetchPostsById(res.data))
        })
    } catch (error) {
      dispatch(fetchPostsById(error))
    }
  }, [postId])

  return <>{children}</>
}

export default FetchFunctions
