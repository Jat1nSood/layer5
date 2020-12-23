import styled from "styled-components";

export const WorkshopPageWrapper = styled.div`
	.btn-and-status {
		display: flex;
		width: 97%;
		position: absolute;
		top: 90%;

		p {
			color: darkgrey;
			font-size: 1.25rem;
			margin-left: 1.25rem;
			float: left;
			padding-left: 1.5625rem;
		}
	}

	.btn-and-status-open {
		display: flex;
		align-items: center;
		bottom: 2.1875rem;
		position: absolute;
		width: 95%;

		p {
			color: darkgrey;
			font-size: 1.25rem;
			margin-left: 1.25rem;
			float: left;
		}
	}

	button.upcoming {
		display: block;
		width: auto;
		margin-left: auto;
		margin-right: 1.25rem;
		padding: 0.375rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: #fff;
		background-color: #00b39f;
		border: none;
		border-radius: 0.9375rem;
		outline: none;
		box-shadow: 0rem 0.3125rem 0.625rem rgba(0, 179, 159, 0.3);
	}

	.linkAndReadBtns {
		display: flex;
		width: 95%;
		flex-direction: row-reverse;
		justify-content: space-between;
		position: absolute;
		bottom: 0rem;
	}

	.linkAndReadBtns-open {
		width: 30%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}

	button.readmeBtn {
		display: flex;
		background: transparent;
		border: none;
		justify-content: center;
		align-items: center;
		font-size: 1.125rem;
		cursor: pointer;
		transition: 0.5s ease-in all;

		&:hover {
			color: #00d3a9;
		}
	}

	a.siteLink {
		margin-left: 1.25rem;
		filter: grayscale(1);
		transition: 0.5s ease-in-out all;

		&:hover {
			color: #00d3a9;
			filter: none;
		}
	}

	.readme-btn {
		float: right;
		margin: 0 1.25rem 1.25rem 0;
		padding: 0.625rem 0.9375rem;
		border: none;
		background-color: turquoise;
		font-size: 1.25rem;
		font-weight: 500;
		color: white;
		border-radius: 0.3125rem;
		cursor: pointer;
		box-shadow: 0rem 0.125rem 0.625rem rgba(0, 0, 0, 0.2);
		-webkit-transition: 0.5s ease-in-out all;
		transition: 0.5s ease-in-out all;

		&:hover {
			color: turquoise;
			background-color: white;
			box-shadow: 0rem 0.125rem 1.25rem rgba(0, 0, 0, 0.2);
		}
	}

	.text-contents {
		display: none;
		width: 100%;
		height: 100%;
	}

	.active {
		display: block;
		width: 100%;
		height: 100%;
		padding: 1.25rem 1.25rem 3.75rem 1.25rem;
	}

	.social-icons {
		display: flex;
		margin-left: 1.25rem;
		width: 70%;
	}

	.links {
		display: flex;
		color: #00d3a9;
		border: none;
		align-items: center;
		padding: 0.3125rem 0.9375rem;
		background-color: whitesmoke;
		margin-right: 0.625rem;
		border-radius: 0.3125rem;
		font-size: 1.125rem;
		font-weight: 400;
		box-shadow: 0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);
		transition: 0.5s ease-in-out all;

		&:hover {
			color: #00b39f;
			box-shadow: 0rem 0.3125rem 0.9375rem rgba(0, 0, 0, 0.1);

			img {
				filter: none;
			}
		}

		img {
			height: 1.25rem;
			width: auto;
			display: block;
			padding-right: 0.625rem;
			filter: grayscale(1);
		}
	}

	.workshop-list-wrapper {
		padding: 3.125rem 0rem;
	}
	.workshop-grid-wrapper {
		padding-bottom: 3.75rem;
		margin-top: 5rem;
	}

	.workshop-grid-card {
		width: 100%;
		display: block;
		height: auto;
		border-radius: 0.3125rem;
		margin-bottom: 1.25rem;
		box-shadow: 0rem 0.0625rem 0.3125rem rgba(0, 0, 0, 0.2);
		-webkit-transition: 0.5s ease-in-out all;
		transition: 0.5s ease-in-out all;

		&:hover {
			box-shadow: 0rem 1.25rem 2.5rem rgba(0, 0, 0, 0.15);
		}
	}

	@media only screen and (max-width: 57rem) {
		.workshop-page-wrapper {
			padding-bottom: 5rem;
		}
	}

	@media only screen and (max-width: 37.5rem) {
		.links {
			padding: 0rem 0.625rem;
			margin-right: 0.3125rem;
			font-size: 0.9375rem;

			img {
				height: 0.9375rem;
			}
		}

		.readme-btn {
			margin: 0rem 0.625rem 0.625rem 0rem;
			padding: 0.3125rem 0.3125rem;
		}
	}
	.see-more-button {
		margin: 0rem auto;
	}

	.para {
		text-align: center;
		font-weight: 500;
	}
`;
