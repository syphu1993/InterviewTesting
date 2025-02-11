import Button from "../../../button/Button";

const TopFooter: React.FC = () => {
    return (
        <div className="top-footer flex-column item-center">
            <p className="text-center text-big">Start upgrading your skills free for this month</p>
            <p className="text-center mendium-title">Build your site for free and take as long as you need</p>
            <div className="flex-row cover-btn-top hidden-sm">
                <Button
                    width={236}
                    height={75}
                    background={'#F4F4F4'}
                    isIcon={false}
                    radius={4}
                    paddingX={24}
                    paddingY={24}
                    content={'Try Yourself'}
                    color={'#000000'} />
                <Button
                    width={236}
                    height={75}
                    background={'#000000'}
                    isIcon={true}
                    radius={4}
                    paddingX={24}
                    paddingY={24}
                    content={'Get started'}
                    color={'#FFFFFF'} />
            </div>
            <div className="flex-column cover-btn-top hidden-lg gap-20">
                <Button
                    width={256}
                    height={32}
                    background={'#F4F4F4'}
                    isIcon={false}
                    radius={2}
                    paddingX={24}
                    paddingY={24}
                    fontSize={16}
                    content={'Try Yourself'}
                    color={'#000000'} />
                <Button
                    width={256}
                    height={32}
                    background={'#000000'}
                    isIcon={true}
                    radius={2}
                    paddingX={60}
                    paddingY={24}
                    fontSize={16}
                    content={'Get started'}
                    color={'#FFFFFF'} />
            </div>
        </div>
    );
};

export default TopFooter;
