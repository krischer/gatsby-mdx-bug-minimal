import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

type Props = {
  children: React.ReactNode;
};

// Works
export default function MDXPageTemplate(props: Props) {
  console.log("Using functional component.");
  console.log(props);
  // this.props.children !== undefined
  return <MDXProvider>{props.children}</MDXProvider>;
}

// Does not work.
// export default class MDXPageTemplate extends React.Component<Props> {
//   public render() {
//     console.log("Using class component.");
//     console.log(this.props);
//     // this.props.children === undefined
//     return <MDXProvider>{this.props.children}</MDXProvider>;
//   }
// }

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`;
