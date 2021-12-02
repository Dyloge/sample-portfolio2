import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: 'Lato', sans-serif;
}
body {
    background-color: #131313;
	color:#d8d8d8;
}




.colored-text {
	color: #b43030;
}

.btn {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	font-weight: 700;
	font-size: 0.85rem;
	border-radius: 0.5rem;
	overflow: hidden;
	color: #b43030;
	pointer-events: auto;
	cursor: pointer;
	background: #000;
	border: none;
	padding: 0.5rem 1.5rem;
	margin-top: 50px;
	font-family: inherit;
	font-size: 20px;
	position: relative;
	display: inline-block;

	
	&::before,&::after{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	&:hover::before {
		transform: translate3d(100%,0,0);
	}
}

.btn span {
	position: relative;
}
.btn::before {
	content: '';
	background:#e7e7e7 ;
	width: 120%;
	left: -10%;
	transform: skew(30deg);
	transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}
.main-container:hover .course-container {
	opacity: 1;
	animation: bounceIn 1.2s linear;
}



@keyframes bounceIn {
	0%,
	20%,
	40%,
	60%,
	80%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3);
	}
	20% {
		-webkit-transform: scale3d(1.03, 1.03, 1.03);
		transform: scale3d(1.03, 1.03, 1.03);
	}
	40% {
		-webkit-transform: scale3d(0.9, 0.9, 0.9);
		transform: scale3d(0.9, 0.9, 0.9);
	}
	60% {
		opacity: 1;
		-webkit-transform: scale3d(1.01, 1.01, 1.01);
		transform: scale3d(1.01, 1.01, 1.01);
	}
	80% {
		-webkit-transform: scale3d(0.97, 0.97, 0.97);
		transform: scale3d(0.97, 0.97, 0.97);
	}
	to {
		opacity: 1;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
}
`

export default GlobalStyle;