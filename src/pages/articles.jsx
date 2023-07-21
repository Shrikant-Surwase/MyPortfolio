import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";
import Typed from "typed.js";
import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		var options = {
			strings: ['<i>I am passionate about pushing the boundaries of what is possible and inspiring the next generation of innovators.</i>'],
			typeSpeed: 40,
			
			
		  };
		  
		  var typed = new Typed('.element', options);
		  return ()=>{
             typed.destroy();
		  }

	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");
  const {isDark} = useContext(ThemeContext)
	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className={`${isDark ? 'page-content-dark':'page-content'}`}>
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							
							<span className="element"></span>
						</div>

						<div className={`${isDark ? "subtitle articles-subtitle demo1":"subtitle articles-subtitle demo"}`}>
							{INFO.articles.description}
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
