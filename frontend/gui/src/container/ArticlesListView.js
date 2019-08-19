import React from "react";

import Articles from "../components/Articles";

import axios from "axios";

import CustomForm from "../components/Form";

class ArticlesList extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
      console.log(res.data);
    });
  }
  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <div>
          <h1>Create New Article</h1>
          <CustomForm buttonType="Create" requestType="post" articleID={null} />
        </div>
      </div>
    );
  }
}

export default ArticlesList;
