// //idk doesnt work without info, just setting up some other basic stuff
// //for when we do get it
// //guess i'll make a basic footer? whats a footer, idk the stuff at the bottom where it has links to instagram, facebook or creators whatever
// import React from 'react'
// import { Form, Button } from 'semantic-ui-react'
// //import gql from 'graphql-tag'
// //import { useMutation } from '@apollo/react-hooks'

// //import { useForm } from '../util/hooks'
// //import { FETCH_REVIEWS_QUERY } from '../util/graphql'

// function Review() {
//     const { values, onChange, onSubmit } = useForm(createReviewCallback, {
//         body: '',
//         stars: 0
//     });

//     const [createReview, { error }] = useMutation(CREATE_REVIEW_MUTATION, {
//         variables: values,
//         update(proxy, result) {
//             const data = proxy.readQuery({
//                 query: FETCH_REVIEWS_QUERY
//             })
//             const reviews = [result.data.createReview, ...data.getReviews];
//             proxy.writeQuery({ query: FETCH_REVIEWS_QUERY, data: { getReviews: reviews } })
//             values.body = ''
//         },
//         onError(err) {
//             return err;
//         }
//     })

//     function createReviewCallback() {
//         createReview();
//     }

//     return (
//         <div>
//             <Form onSubmit={onSubmit}>
//                 <h2> Create a Review: </h2>
//                 <Form.Field>
//                     <Form.Input
//                         placeholder="Review . . ."
//                         name="body"
//                         onChange={onChange}
//                         value={values.body}
//                         error={error ? true : false}
//                     />
//                     {/* stars with icons? buttons? */}
//                     <Button type="submit">
//                         Submit
//                     </Button>
//                 </Form.Field>
//             </Form>
//             {error && (
//                 <div className="ui error message">
//                     <ul className="list">
//                         <li>{error.graphQLErrors[0].message}</li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     )
// }


// /* const CREATE_REVIEW_MUTATION = gql`
//   mutation createReview($body: String!) {
//     createReview(body: $body) {
//       id
//       body
//       createdAt
//       username
//       likes {
//         id
//         username
//         createdAt
//       }
//       likeCount
//       comments {
//         id
//         body
//         username
//         createdAt
//       }
//       commentCount
//     }
//   }
// `; */

// export default Review;