import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
class Graph extends Component {
	render() {
		const { priceData, stock } = this.props;
		const options = {
			chart: {
				backgroundColor: "#000",
				borderColor: "#000",
				plotBorderColor: "#00c807",
			},

			title: {
				text: stock,
				style: {
					color: "#00c807",
					font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
				},
			},
			colors: ["#00c807"],
			yAxis: {
				gridLineColor: "#000",
			},

			legend: {
				itemStyle: {
					color: "#00c807",
				},
			},

			series: [
				{
					name: "Stock Price",
					data: priceData,
					marker: {
						enabled: false,
					},
				},
			],
		};
		return (
			<div>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
				></HighchartsReact>
			</div>
		);
	}
}

export default Graph;
