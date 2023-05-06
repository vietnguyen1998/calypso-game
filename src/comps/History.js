import * as React from 'react';
import Paper from '@mui/material/Paper';
import HistoryIcon from '@mui/icons-material/History';

export default function History() {
    return (
        <div style={{ maxHeight: 300 }}>
            <div style={{background: "#20225B"}} className='h-12 flex items-center px-4 mb-2'>
                <HistoryIcon />
               <p className='font-bold ml-2'> Game History</p>
            </div>
            <div class="table-wrp block">
                <table class="w-full text-white">
                    <thead class="sticky top-0">
                        <tr class="background-body font-bold">
                            <th scope="col" class="text-md font-bold px-6 py-4 text-left" style={{ color: "rgb(105 101 255)" }}>
                                Bust
                            </th>
                            <th scope="col" class="text-md font-bold px-6 py-4 text-left" style={{ color: "rgb(105 101 255)" }}>
                                @
                            </th>
                            <th scope="col" class="text-md font-bold px-6 py-4 text-left" style={{ color: "rgb(105 101 255)" }}>
                                Bet
                            </th>
                            <th scope="col" class="text-md font-bold px-6 py-4 text-left" style={{ color: "rgb(105 101 255)" }}>
                                Profit
                            </th>
                            <th scope="col" class="text-md font-bold px-6 py-4 text-left" style={{ color: "rgb(105 101 255)" }}>
                                Hash
                            </th>
                        </tr>
                    </thead>
                    <tbody class="overflow-y-auto">
                        <tr class="background-body transition duration-300 ease-in-out">
                            <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                11.68x
                            </td>
                            <td class="text-sm font-extrabold font-light px-6 py-4 whitespace-nowrap">
                                -- </td>
                            <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                --
                            </td>
                            <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                --
                            </td>
                            <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                --
                            </td>
                        </tr>
                        <tr class="background-body transition duration-300 ease-in-out">
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                        11.68x	
                        </td>
                        <td class="text-sm font-extrabold font-light px-6 py-4 whitespace-nowrap">
                            -- </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                    </tr>
                    <tr class="background-body transition duration-300 ease-in-out">
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                        11.68x	
                        </td>
                        <td class="text-sm font-extrabold font-light px-6 py-4 whitespace-nowrap">
                            -- </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                    </tr>
                    <tr class="background-body transition duration-300 ease-in-out">
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                        11.68x	
                        </td>
                        <td class="text-sm font-extrabold font-light px-6 py-4 whitespace-nowrap">
                            -- </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                    </tr>
                    <tr class="background-body transition duration-300 ease-in-out">
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                        11.68x	
                        </td>
                        <td class="text-sm font-extrabold font-light px-6 py-4 whitespace-nowrap">
                            -- </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                    </tr>
                    <tr class="background-body transition duration-300 ease-in-out">
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                        11.68x	
                        </td>
                        <td class="text-sm font-extrabold font-light px-6 py-4 whitespace-nowrap">
                            -- </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                            --
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}