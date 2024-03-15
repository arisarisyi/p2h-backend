import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return User;
  }
  /**
   * Called before entity insert.
   */
  async beforeInsert(event: InsertEvent<any>) {
    const { entity } = event;
    if (entity.password)
      entity.password = await bcrypt.hash(entity.password, 10);
  }
}
