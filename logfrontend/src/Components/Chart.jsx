import { Tooltip } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label } from 'recharts';



const Chart = ({data, xKey, yLabel, lineKeys}) => {
  return (
    <div className='w-3/4 h-[50vh] mx-auto'>
        <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 15, bottom: 65 }}>
                <XAxis dataKey={xKey} angle={-90} textAnchor='end' />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <YAxis>
                    <Label
                        style={{
                            textAnchor: "middle",
                            fontSize: "70%",
                        }}
                        angle={-270} 
                        value={yLabel}
                        offset={20}
                        pa
                    />
                </YAxis>
                <Line type="monotone" dataKey={lineKeys[0]} stroke="#8884d8" />
                <Tooltip/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Chart
