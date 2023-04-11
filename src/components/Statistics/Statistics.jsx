import React,  { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const marksAssignment = [
    { id: 1, assignmentName: "assign1-port-repo", marks:57,totalMarks: 60},
    { id: 2,assignmentName: "architect-repo", marks:59,totalMarks: 60},
    { id: 3, assignmentName: "legal-house", marks:54,totalMarks: 60 },
    { id: 4,assignmentName: "problem solving", marks:27,totalMarks: 30 },
    { id: 5, assignmentName: "geometry-genius", marks:53,totalMarks: 60 },
    { id: 6,assignmentName: "ai-universe", marks:58,totalMarks: 60 },
    { id: 7, assignmentName: "quiz-hero", marks:60,totalMarks: 60 },
    { id: 8, assignmentName: "knowledge-cafe", marks:48,totalMarks: 60 },
    
  ];
  return (
    <div className='justify-center items-center mx-auto'>
      <ComposedChart
        width={500}
        height={400}
        data={marksAssignment}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis dataKey='assignmentName'></XAxis>
        <YAxis dataKey='totalMarks'></YAxis>
        <Line dataKey='id' stroke="#ff7300"></Line>
        <Scatter fill="red" />
        <CartesianGrid stroke="#f5f5f5" />
        <Area dataKey='marks'></Area>
        <Tooltip></Tooltip>
        <Legend />
      </ComposedChart>
    </div>
  );
};

export default Statistics;