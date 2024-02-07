"use client"
import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

interface Category {
  categoryName: string;
  measurements: Record<string, string>;
}

interface SizeChartProps {
  chartName: string;
  categories: Category[];
}

export default function SizeChartTable({ chartName, categories }: SizeChartProps) {

  return (
    <TableContainer sx={{mt:{xs:4,sm:0},width:'100%',boxShadow:'none !Important',border:"1px solid #0e0e0e21"}} component={Paper}>
     
       <Table sx={{ minWidth: 200,width:'100%' }} aria-label="size chart table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {Object.keys(categories[0]?.measurements || {}).map((measurementName, index) => (
              <TableCell key={index} align="right">{measurementName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {category.categoryName}
              </TableCell>
              {Object.values(category.measurements).map((measurementValue, index) => (
                <TableCell key={index} align="right">{measurementValue}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
