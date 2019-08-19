import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

class CustomForm extends React.Component {
  //   componentDidMount() {
  //     console.log("Getting article: ", this.props.article);
  //   }

  handleFormSubmit = (event, requestType, articleID) => {
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const content = event.target.elements.content.value;
    console.log(`Title: ${title}. 'Content: ${content}`);

    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/", {
            title,
            description,
            content
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title,
            description,
            content
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item label="Title">
            <Input
              name="title"
              defaultValue={this.props.article ? this.props.article.title : ""}
              placeholder="Put a title here"
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input
              name="description"
              defaultValue={
                this.props.article ? this.props.article.description : ""
              }
              placeholder="Enter some description"
            />
          </Form.Item>
          <Form.Item label="Content">
            <Input
              name="content"
              defaultValue={
                this.props.article ? this.props.article.content : ""
              }
              placeholder="Enter some content"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.buttonType}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
