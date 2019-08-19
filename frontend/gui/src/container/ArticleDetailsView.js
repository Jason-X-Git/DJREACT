import React from "react";
import axios from "axios";
import { Card, Button } from "antd";
import CustomForm from "../components/Form";

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}/`).then(res => {
      this.setState({
        article: res.data
      });
      // console.log("Details: ", this.state.article);
    });
  }

  handleFormDelete = event => {
    const articleID = this.props.match.params.articleID;
    console.log("Deleting ", this.props.match.articleID);
    axios
      .delete(`http://127.0.0.1:8000/api/${articleID}/`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/");
    this.forceUpdate();
  };

  render() {
    const article = this.state.article;
    if (article.title) {
      return (
        <div>
          <Card title={article.title}>
            <p>{article.description}</p>
            <p>{article.content}</p>
          </Card>
          <div>
            <h1>Update Article</h1>
            <CustomForm
              article={{ ...article }}
              buttonType="Update"
              requestType="put"
              articleID={this.props.match.params.articleID}
            />
            <form onSubmit={this.handleFormDelete}>
              <Button type="danger" htmlType="submit">
                Delete
              </Button>
            </form>
          </div>
        </div>
      );
    } else {
      return <div>Article does not exists !</div>;
    }
  }
}

export default ArticleDetail;
