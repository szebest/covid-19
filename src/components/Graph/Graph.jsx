import { useEffect, useState } from 'react'
import { Chart } from 'react-charts'

function Graph({data}) {
    const [chartData, setChartData] = useState([])

    const axes = [
        { primary: true, type: 'time', position: 'bottom' },
        { type: 'linear', position: 'left' }
    ]

    useEffect(() => {
        let maxLength = 0
        for (const key in data) {
            maxLength = Math.max(maxLength, Object.keys(data[key]).length)
        }

        let chartLabel = {
            label: 'Current',
            data: new Array(maxLength)
        }
        
        if (maxLength > 0) {
            for (const key in data) {
                let index = 0

                for (const secondKey in data[key]) {
                    const obj = data[key][secondKey]
                    const currentlyInfectedThatDayInACountry = obj.confirmed - obj.deaths - obj.recovered

                    if (chartLabel.data[index] === undefined)
                        chartLabel.data[index] = {x: null, y: 0}

                    chartLabel.data[index].x = new Date(obj.date)
                    chartLabel.data[index].y += currentlyInfectedThatDayInACountry
                    index++
                }
            }

            setChartData([chartLabel])
        }
    }, [data])

    const lineChart = (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
          style={{
            width: '90%',
            height: '600px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <Chart data={chartData} axes={axes} tooltip={true} />
        </div>
      )

    return (
        <div>
            {lineChart}
        </div>
    )
}

export default Graph;