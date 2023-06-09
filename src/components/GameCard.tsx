import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, Image, Heading, CardBody, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    console.log(game.parent_platforms);
    return (
        <Card borderRadius='10px' overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
            </CardBody>
        </Card>
    );
};

export default GameCard;
