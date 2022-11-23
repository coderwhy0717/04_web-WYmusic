import styled from 'styled-components'

export const SongListTableWrapper = styled.div`
        border:1px solid #ccc;
        .table {
            .ant-table-thead {
                font-size: 13px !important;
                color: #333;
                border-bottom: 2px solid red !important;
            }
            .ant-table-row {
                height: 25px;
                .ant-table-cell {
                    padding: 6px 6px;
                    font-size: 12px;
                }
            }
            .ant-table-row:nth-child(2n-1) {
                background-color: #f6f6f6;
            }
          
            .album {
                width: 108px;
                color: #333;
            }
        }
       
       
`