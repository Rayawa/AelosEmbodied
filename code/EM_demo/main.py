import sys
sys.path.append("/home/sunrise/catkin_ws/src/aelos_smart_ros")

from leju import *

leju_variable_tag_x = None
leju_variable_green_x = None
leju_variable_tag_y = None
leju_variable_green_y = None
leju_variable_tag_yaw = None

"""描述该功能...
"""
def leju_function__E5_9C_B0_E7_82_B91():
    global leju_variable_tag_x, leju_variable_green_x, leju_variable_tag_y, leju_variable_green_y, leju_variable_tag_yaw
    while True:
        if artag_port.get_specifies_tag(11, 'chest')[0] != 1000:
            leju_variable_tag_x = artag_port.get_specifies_tag(11, 'chest')[0]
            leju_variable_tag_y = artag_port.get_specifies_tag(11, 'chest')[1]
            leju_variable_tag_yaw = (artag_port.get_specifies_tag(11, 'chest')[2]) + 90
            if leju_variable_tag_yaw > 10:
                base_action.action('抱块小左转')
            else:
                if leju_variable_tag_yaw < (-10):
                    base_action.action('抱块小右转')
                else:
                    if leju_variable_tag_y > 0.03:
                        base_action.action('抱块小左侧移')
                    else:
                        if leju_variable_tag_y < (-0.03):
                            base_action.action('抱块小右侧移')
                        else:
                            if leju_variable_tag_x > 0.07:
                                base_action.action('抱块向前慢走半步2')
                            else:
                                base_action.action('抱块前进一步2')
                                base_action.action('放下方块')
                                break

"""描述该功能...
"""
def leju_function__E5_9C_B0_E7_82_B92():
    global leju_variable_tag_x, leju_variable_green_x, leju_variable_tag_y, leju_variable_green_y, leju_variable_tag_yaw
    while True:
        if artag_port.get_specifies_tag(12, 'chest')[0] != 1000:
            leju_variable_tag_x = artag_port.get_specifies_tag(12, 'chest')[0]
            leju_variable_tag_y = artag_port.get_specifies_tag(12, 'chest')[1]
            leju_variable_tag_yaw = (artag_port.get_specifies_tag(12, 'chest')[2]) + 90
            if leju_variable_tag_yaw > 10:
                base_action.action('抱块小左转')
            else:
                if leju_variable_tag_yaw < (-10):
                    base_action.action('抱块小右转')
                else:
                    if leju_variable_tag_y > 0.03:
                        base_action.action('抱块小左侧移')
                    else:
                        if leju_variable_tag_y < (-0.03):
                            base_action.action('抱块小右侧移')
                        else:
                            if leju_variable_tag_x > 0.07:
                                base_action.action('抱块向前慢走半步2')
                            else:
                                base_action.action('抱块前进一步2')
                                base_action.action('放下方块')
                                break



def main():
    nodes.node_initial()
    try:


        leju_function__E5_9C_B0_E7_82_B91()
        for i in range(2):
            base_action.action('大幅度抱箱子左转')
        leju_function__E5_9C_B0_E7_82_B92()

    except Exception as e:
        nodes.serror(e)
        exit(2)
    finally:
        nodes.finishsend()
if __name__ == "__main__":
    print ("Run custom project")
    main()
