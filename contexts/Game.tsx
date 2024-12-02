import { BallData } from '@/types/game';
import { createContext, useContext } from 'react';
import { SharedValue } from 'react-native-reanimated';

export const GameContext = createContext<{ ball?: SharedValue<BallData> }>({});

export const useGameContext = () => useContext(GameContext);
