import React from 'react'
import { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/constants'
import styled from 'styled-components'

function Playlists() {
    const [{token,  playlists }, dispatch ] = useStateProvider()
    useEffect (() => {
        const getPlaylistData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists',
                {
                    headers : {
                        Authorization: "Bearer " + token ,
                        "Content-Type" : "application/json"
                    }
                }
            )
                const {items } = response.data;
            
                const playlists = items.map(({name , id})=> {
                    return {name , id}
                });
                dispatch({type:reducerCases.SET_PLAYLISTS , playlists})
                // console.log(response);
        }
        getPlaylistData();
    }, [token , dispatch])

    const changeCurrentPlaylist = (selectedPlaylistId) => {



        dispatch({type:reducerCases.SET_PLAYLIST_ID , selectedPlaylistId})
    }

  return (
    <Container>
        <ul>
            {
                playlists.map(({name , id}) => {
                    return (
                        <li key={id} onClick={()=> changeCurrentPlaylist(id) }  >{name}</li>
                    )
                })
            }
            {
                playlists.map(({name , id}) => {
                    return (
                        <li key={id}>{name}</li>
                    )
                })
            }
            {
                playlists.map(({name , id}) => {
                    return (
                        <li key={id}>{name}</li>
                    )
                })
            }
            {
                playlists.map(({name , id}) => {
                    return (
                        <li key={id}>{name}</li>
                    )
                })
            }
            
            
        </ul>
    </Container>
  )
}

export default Playlists


const Container = styled.div`
  color: #b3b3b3;
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    /* background-color: gray; */
    gap: 1rem;
    padding: 1rem;
    height: 42vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;