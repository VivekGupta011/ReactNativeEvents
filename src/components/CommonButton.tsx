import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CommonButton = ({
  title,
  onPress,
  width = 'w-full',
  height = 'h-12',
  variant = 'primary',
  textColor = 'text-black', // Default text color
  bgColor = 'bg-blue-600', // Default background color
  borderColor = '', // Default no border color
}: any) => {
  return (
    <TouchableOpacity
      className={`rounded-full justify-center items-center mb-2 px-4 ${width} ${height} ${bgColor} ${borderColor} ${
        variant === 'alternative' ? 'border border-gray-200' : ''
      }`}
      onPress={onPress}>
      <Text className={`${textColor} font-semibold`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
