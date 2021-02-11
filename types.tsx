export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  FindWeebs: undefined;
  Messages: undefined;
  WeebFriends: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type ChatParamList = {
  ChatScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
}

export type MessageChannel = {
  id: String;
  content: String;
  createdAt: number;
  
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: MessageChannel;
}

export type Message = {
  id: String;
  users: User[];
  lastMessage: Message;
  user: User;
}