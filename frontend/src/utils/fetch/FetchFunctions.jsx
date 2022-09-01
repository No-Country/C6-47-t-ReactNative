import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAxios } from '../customHooks/useAxios'
import {
  fetchPosts,
  fetchPostsById,
  setLoading
} from '../../features/posts/postsSlice'

function FetchFunctions({ children }) {
  const dispatch = useDispatch()

  const api = useAxios()

  const posts = useSelector((state) => state.posts.posts)
  const postCount = useSelector((state) => state.posts.postCount)
  const loading = useSelector((state) => state.posts.loading)
  const currentPage = useSelector((state) => state.posts.currentPage)
  const postId = useSelector((state) => state.posts.postId)

  useEffect(() => {
    try {
      api.get(`/post?page=${currentPage}`).then((res) => {
        dispatch(fetchPosts(res.data))
      })
    } catch (error) {
      dispatch(fetchPosts(error))
    }
  }, [currentPage])

  useEffect(() => {
    try {
      if (postId == null) return
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
