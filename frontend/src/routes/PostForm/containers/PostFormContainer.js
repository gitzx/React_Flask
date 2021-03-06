import { connect } from 'react-redux';
import { fetchEditPost, fetchNewPost, savePost } from '../modules/posts';
import { createItem, updateItem, deleteItem, moveItem } from '../modules/items';
import { createTag, deleteTag } from '../modules/tags';
import PostForm from '../components/PostForm';


const mapStateToProps = (state) => ({
	initialValues: state.posts.postForm,
    items: state.items,
    tags: state.tags.tags,
    tagSuggestions: state.tags.tagSuggestions,
    post: state.posts.post,
    title: state.posts.post.title,
    publishedAt: state.posts.post.publishedAt,
    postForm: state.posts.postForm,
    errorMessage: state.posts.errorMessage
})

const mapDispatchToProps = {
  fetchNewPost, 
  fetchEditPost, 
  savePost,

  createItem,
  updateItem, 
  deleteItem, 
  moveItem,
  createTag, 
  deleteTag
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
