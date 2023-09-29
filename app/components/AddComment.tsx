
import { Form } from "@remix-run/react";

const AddComment = () => {
    return (
        <Form action="/comments" method="post">
            <input name="title" type="text" />
            <input name="description" type="text" />
        </Form>
    )
}


export default AddComment